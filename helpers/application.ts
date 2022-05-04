export function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

export function setBgColor(bgColor: string) {
  switch (bgColor) {
    case 'green':
      return 'bg-green-50';
    case 'yellow':
      return 'bg-yellow-50';
    case 'red':
      return 'bg-red-50';
    case 'purple':
      return 'bg-purple-50';
    default:
      break;
  }
}
