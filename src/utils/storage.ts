import * as fs from 'fs';
import * as path from 'path';

export function load(file: string) {
  try {
    const fullPath = path.resolve(file);

    // 🔥 kalau file belum ada → buat otomatis
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, '[]');
    }

    const data = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('LOAD ERROR:', err);
    return [];
  }
}

export function save(file: string, data: any) {
  try {
    const fullPath = path.resolve(file);

    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('SAVE ERROR:', err);
  }
}