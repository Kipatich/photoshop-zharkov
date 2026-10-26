import { Modal } from './Modal';

export interface SampleImage {
  file: string;
  title: string;
  note: string;
  format: 'PNG' | 'JPEG' | 'GB7';
  mime: string;
}

/** Набор изображений из public/test-images для быстрой проверки лабораторных. */
export const SAMPLE_IMAGES: SampleImage[] = [
  {
    file: 'gradient-half-mask.gb7',
    title: 'Градиент с маской',
    note: '512 × 256 · серый + маска',
    format: 'GB7',
    mime: 'application/octet-stream'
  },
  {
    file: 'vertical-circles.gb7',
    title: 'Вертикальные круги',
    note: '300 × 640 · только серый',
    format: 'GB7',
    mime: 'application/octet-stream'
  },
  {
    file: 'grayscale.gb7',
    title: 'Маленькое GB7',
    note: '80 × 60 · проверка 7 бит',
    format: 'GB7',
    mime: 'application/octet-stream'
  },
  {
    file: 'square-masked-256.gb7',
    title: 'Квадрат с маской',
    note: '256 × 256 · серый + маска',
    format: 'GB7',
    mime: 'application/octet-stream'
  },
  {
    file: 'rgb-640x400.png',
    title: 'Цветное изображение',
    note: '640 × 400 · RGB',
    format: 'PNG',
    mime: 'image/png'
  },
  {
    file: 'rgba-400.png',
    title: 'Прозрачность',
    note: '400 × 400 · RGBA',
    format: 'PNG',
    mime: 'image/png'
  },
  {
    file: 'gray-800x300.png',
    title: 'Оттенки серого',
    note: '800 × 300 · Grayscale',
    format: 'PNG',
    mime: 'image/png'
  },
  {
    file: 'contrast.jpg',
    title: 'Фотография',
    note: 'JPEG · проверка цветных каналов',
    format: 'JPEG',
    mime: 'image/jpeg'
  }
];

type Props = {
  open: boolean;
  onSelect: (sample: SampleImage) => void;
  onClose: () => void;
};

export function SamplesDialog({ open, onSelect, onClose }: Props) {
  return (
    <Modal open={open} title="Тестовые изображения" width={680} onClose={onClose}>
      <p className="muted samples__intro">
        Эти файлы лежат в проекте и открываются одним нажатием. Начните с GB7 с маской или цветного PNG.
      </p>
      <div className="samples">
        {SAMPLE_IMAGES.map((sample) => (
          <button key={sample.file} type="button" className="sample" onClick={() => onSelect(sample)}>
            <span className={`sample__badge sample__badge--${sample.format.toLowerCase()}`}>{sample.format}</span>
            <span className="sample__body">
              <b className="sample__title">{sample.title}</b>
              <span className="sample__file">{sample.file}</span>
              <span className="sample__note">{sample.note}</span>
            </span>
          </button>
        ))}
      </div>
    </Modal>
  );
}
