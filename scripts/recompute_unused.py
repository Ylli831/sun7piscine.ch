#!/usr/bin/env python3
import os
from pathlib import Path
import urllib.parse

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public' / 'sun7piscine-photos'
SRC = ROOT / 'src'

def gather_public():
    files = []
    for p in PUBLIC.rglob('*'):
        if p.is_file():
            rel = p.relative_to(ROOT / 'public')
            files.append(str(rel).replace('\\\\','/'))
    return sorted(files)

def gather_source_text():
    texts = []
    for p in SRC.rglob('*'):
        if p.suffix.lower() in ('.ts', '.tsx', '.js', '.jsx', '.json', '.md'):
            try:
                texts.append(p.read_text(encoding='utf-8', errors='ignore'))
            except Exception:
                pass
    return '\n'.join(texts)

def main():
    public_files = gather_public()
    src_text = gather_source_text()

    used = []
    unused = []
    for rel in public_files:
        web_path = '/' + rel.replace('\\\\', '/')
        encoded = urllib.parse.quote(web_path)
        basename = os.path.basename(rel)

        if web_path in src_text or encoded in src_text or basename in src_text:
            used.append(web_path)
        else:
            unused.append(web_path)

    print(f"Total public images: {len(public_files)}")
    print(f"Used images: {len(used)}")
    print(f"Unused images: {len(unused)}")
    if unused:
        print("\nList of unused images:")
        for u in unused:
            print(u)

if __name__ == '__main__':
    main()
