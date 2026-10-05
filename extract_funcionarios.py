import json
import sys
from collections import Counter
from pathlib import Path

sys.path.insert(0, str(Path(__file__).with_name(".vendor")))
import xlrd


SOURCE = Path(r"C:\Users\gutem\Downloads\ATIVOS AGRICOLA 22 07 2026.xls")
OUTPUT = Path(__file__).with_name("funcionarios_import.json")


def text(value):
    if value is None:
        return ""
    if isinstance(value, float) and value.is_integer():
        return str(int(value))
    return str(value).strip()


book = xlrd.open_workbook(str(SOURCE))
sheet = book.sheet_by_index(0)
records = []
for row in range(1, sheet.nrows):
    values = sheet.row_values(row)
    if not any(text(value) for value in values):
        continue
    record = {
        "empresa": text(values[0]),
        "cadastro": text(values[1]),
        "nome": text(values[2]),
        "admissao": text(values[3]),
        "cargo": text(values[4]),
        "local": text(values[5]),
        "area": text(values[6]),
        "observacao": text(values[7]),
        "situacao": "Ativo",
        "id": f"funcionarios-{row}",
    }
    records.append(record)

summary = {
    "source": SOURCE.name,
    "records": records,
    "locations": Counter(record["local"] for record in records),
    "areas": Counter(record["area"] for record in records),
    "roles": Counter(record["cargo"] for record in records),
}
OUTPUT.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
print(OUTPUT)
print(f"records={len(records)} locations={len(summary['locations'])} areas={len(summary['areas'])} roles={len(summary['roles'])}")
