interface HTMLImageElementWithData extends HTMLImageElement {
  dataset: {
    src: string;
  };
}

const lazyload = (
  images: HTMLImageElementWithData[]
): HTMLImageElementWithData[] => {
  const res: HTMLImageElementWithData[] = [];
  const toBeRemoved: { [key: string]: boolean } = {};
  for (let i = 0; i < images.length; i++) {
    const { top } = images[i].getBoundingClientRect();
    if (top < window.innerHeight) {
      images[i].src = images[i].dataset.src;
      continue;
    }
    res.push(images[i]);
  }
  return images;
};
