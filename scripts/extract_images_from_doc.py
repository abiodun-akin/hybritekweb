from pathlib import Path

# Path to the .doc file
doc_path = Path(r"d:\dev\apps\hybritekwebsite\FarmConnect\Portal Proposal- Topup - OSUTECH.doc")
out_dir = doc_path.parent

print(f"Reading: {doc_path}")

data = doc_path.read_bytes()

signatures = {
    b"\x89PNG\r\n\x1a\n": '.png',
    b"\xff\xd8\xff": '.jpg',
}

found = 0
for sig, ext in signatures.items():
    start = 0
    while True:
        idx = data.find(sig, start)
        if idx == -1:
            break
        if sig == b"\x89PNG\r\n\x1a\n":
            idx_end = data.find(b'IEND', idx)
            if idx_end == -1:
                end = len(data)
            else:
                end = idx_end + 8
        else:
            idx_end = data.find(b"\xff\xd9", idx)
            if idx_end == -1:
                end = len(data)
            else:
                end = idx_end + 2
        img_bytes = data[idx:end]
        out_path = out_dir / f"extracted_{found+1}{ext}"
        out_path.write_bytes(img_bytes)
        print(f"Wrote: {out_path}")
        found += 1
        start = end

print(f"Done. Extracted {found} images to {out_dir}")
