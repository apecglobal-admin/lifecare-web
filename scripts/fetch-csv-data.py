import requests
import csv
import json
from io import StringIO

# URLs for the CSV files
tecco_url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BẢNG GIÁ UP PHAN MEM tu 01.10.2025 - tecco-rgSaERLHHnLDCS3SSgSiNuCt3tOESA.csv"
branch_81_url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BẢNG GIÁ UP PHAN MEM tu 01.10.2025 - 81-knkwNu4kqWsl9at7MgUVPtRtTl1l0c.csv"

print("[v0] Fetching Tecco CSV...")
try:
    response_tecco = requests.get(tecco_url)
    response_tecco.raise_for_status()
    print(f"[v0] Tecco CSV status: {response_tecco.status_code}")
    print(f"[v0] Tecco CSV content length: {len(response_tecco.text)}")
    print("[v0] First 500 characters of Tecco CSV:")
    print(response_tecco.text[:500])
    print("\n" + "="*80 + "\n")
except Exception as e:
    print(f"[v0] Error fetching Tecco CSV: {e}")

print("[v0] Fetching 81-83 Branch CSV...")
try:
    response_81 = requests.get(branch_81_url)
    response_81.raise_for_status()
    print(f"[v0] 81-83 CSV status: {response_81.status_code}")
    print(f"[v0] 81-83 CSV content length: {len(response_81.text)}")
    print("[v0] First 500 characters of 81-83 CSV:")
    print(response_81.text[:500])
    print("\n" + "="*80 + "\n")
except Exception as e:
    print(f"[v0] Error fetching 81-83 CSV: {e}")

# Parse Tecco CSV
print("[v0] Parsing Tecco CSV...")
try:
    tecco_data = []
    csv_reader = csv.DictReader(StringIO(response_tecco.text))
    for row in csv_reader:
        tecco_data.append(row)
    print(f"[v0] Tecco CSV rows: {len(tecco_data)}")
    print("[v0] Tecco CSV columns:", list(tecco_data[0].keys()) if tecco_data else "No data")
    if tecco_data:
        print("[v0] First 3 rows of Tecco data:")
        for i, row in enumerate(tecco_data[:3]):
            print(f"Row {i+1}:", json.dumps(row, ensure_ascii=False, indent=2))
except Exception as e:
    print(f"[v0] Error parsing Tecco CSV: {e}")

print("\n" + "="*80 + "\n")

# Parse 81-83 CSV
print("[v0] Parsing 81-83 CSV...")
try:
    branch_81_data = []
    csv_reader = csv.DictReader(StringIO(response_81.text))
    for row in csv_reader:
        branch_81_data.append(row)
    print(f"[v0] 81-83 CSV rows: {len(branch_81_data)}")
    print("[v0] 81-83 CSV columns:", list(branch_81_data[0].keys()) if branch_81_data else "No data")
    if branch_81_data:
        print("[v0] First 3 rows of 81-83 data:")
        for i, row in enumerate(branch_81_data[:3]):
            print(f"Row {i+1}:", json.dumps(row, ensure_ascii=False, indent=2))
except Exception as e:
    print(f"[v0] Error parsing 81-83 CSV: {e}")
