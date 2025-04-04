export function cx(...classNames: (string | boolean | undefined | null)[]) {
  return classNames.filter(Boolean).join(" ");
}

export const myLoader = ({ src, width, quality }: { src: string, width: number, quality?: number }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
