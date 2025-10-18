#!/usr/bin/env python3
import os
import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / 'public' / 'sun7piscine-photos'
SRC_DIR = ROOT / 'src'

def normalize_basename(name: str) -> str:
    # preserve extension
    stem, ext = os.path.splitext(name)
    # normalize unicode -> ascii
    nkfd = unicodedata.normalize('NFKD', stem)
    ascii_str = nkfd.encode('ascii', 'ignore').decode('ascii')
    # replace non-word chars with hyphens, collapse hyphens
    ascii_str = ascii_str.strip()
    ascii_str = re.sub(r"\s+", "-", ascii_str)
    ascii_str = re.sub(r"[^A-Za-z0-9\-_]", "", ascii_str)
    ascii_str = re.sub(r"-+", "-", ascii_str)
    if not ascii_str:
        ascii_str = 'image'
    return f"{ascii_str}{ext}"

def gather_public_files():
    files = []
    for p in PUBLIC_DIR.rglob('*'):
        if p.is_file():
            rel = p.relative_to(ROOT / 'public')
            files.append((p, rel))
    return files

def update_source_refs(mapping):
    # mapping: old_web_path -> new_web_path
    files = list((SRC_DIR).rglob('*'))
    txt_files = [f for f in files if f.is_file() and f.suffix in ('.ts', '.tsx', '.js', '.jsx', '.json')]
    for f in txt_files:
        try:
            s = f.read_text(encoding='utf-8')
        except Exception:
            continue
        modified = s
        for old, new in mapping.items():
            if old in modified:
                modified = modified.replace(old, new)
        if modified != s:
            f.write_text(modified, encoding='utf-8')
            print(f"Updated references in {f.relative_to(ROOT)}")

def main():
    mapping = {}
    files = gather_public_files()
    for p, rel in files:
        old_web = '/' + str(rel).replace('\\\\', '/')
        new_name = normalize_basename(p.name)
        if new_name != p.name:
            new_path = p.with_name(new_name)
            # avoid overwriting existing file
            if new_path.exists():
                # if identical content, remove old; otherwise append suffix
                if new_path.read_bytes() == p.read_bytes():
                    p.unlink()
                    print(f"Removed duplicate {p} -> {new_path}")
                    new_web = '/' + str(new_path.relative_to(ROOT / 'public')).replace('\\\\','/')
                    mapping[old_web] = new_web
                    continue
                else:
                    # find a unique name
                    base, ext = os.path.splitext(new_name)
                    i = 1
                    while True:
                        candidate = f"{base}-{i}{ext}"
                        candidate_path = p.with_name(candidate)
                        if not candidate_path.exists():
                            new_path = candidate_path
                            break
                        i += 1
            p.rename(new_path)
            new_web = '/' + str(new_path.relative_to(ROOT / 'public')).replace('\\\\','/')
            mapping[old_web] = new_web
            print(f"Renamed: {old_web} -> {new_web}")
        else:
            # still ensure mapping maps to itself for uniformity
            mapping[old_web] = old_web

    # Update source code references
    update_source_refs(mapping)

    # Report
    print('\nNormalization complete. Summary mapping:')
    for k, v in mapping.items():
        if k != v:
            print(f"{k} -> {v}")

if __name__ == '__main__':
    main()
