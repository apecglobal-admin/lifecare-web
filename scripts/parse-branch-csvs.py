import requests
import csv
from io import StringIO

# URLs for the CSV files
tecco_url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B%E1%BA%A2NG%20GI%C3%81%20UP%20PHAN%20MEM%20tu%2001.10.2025%20-%20tecco-rgSaERLHHnLDCS3SSgSiNuCt3tOESA.csv"
branch_81_url = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/B%E1%BA%A2NG%20GI%C3%81%20UP%20PHAN%20MEM%20tu%2001.10.2025%20-%2081-knkwNu4kqWsl9at7MgUVPtRtTl1l0c.csv"

print("[v0] Fetching Tecco CSV...")
tecco_response = requests.get(tecco_url)
print(f"[v0] Tecco CSV status: {tecco_response.status_code}")
print(f"[v0] Tecco CSV length: {len(tecco_response.text)}")
print("[v0] First 500 chars of Tecco CSV:")
print(tecco_response.text[:500])
print("\n" + "="*80 + "\n")

print("[v0] Fetching 81-83 Branch CSV...")
branch_81_response = requests.get(branch_81_url)
print(f"[v0] 81-83 CSV status: {branch_81_response.status_code}")
print(f"[v0] 81-83 CSV length: {len(branch_81_response.text)}")
print("[v0] First 500 chars of 81-83 CSV:")
print(branch_81_response.text[:500])
print("\n" + "="*80 + "\n")

# Parse Tecco CSV
print("[v0] Parsing Tecco CSV structure...")
tecco_csv = csv.reader(StringIO(tecco_response.text))
tecco_rows = list(tecco_csv)
print(f"[v0] Tecco total rows: {len(tecco_rows)}")
print("[v0] Tecco first 5 rows:")
for i, row in enumerate(tecco_rows[:5]):
    print(f"Row {i}: {row}")
print("\n" + "="*80 + "\n")

# Parse 81-83 CSV
print("[v0] Parsing 81-83 CSV structure...")
branch_81_csv = csv.reader(StringIO(branch_81_response.text))
branch_81_rows = list(branch_81_csv)
print(f"[v0] 81-83 total rows: {len(branch_81_rows)}")
print("[v0] 81-83 first 5 rows:")
for i, row in enumerate(branch_81_rows[:5]):
    print(f"Row {i}: {row}")

print("\n[v0] CSV parsing complete!")
