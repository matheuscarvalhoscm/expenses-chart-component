import data from '../data.json';

const amountContainer = document.getElementsByClassName('expenses-chart__amount') as HTMLCollectionOf<HTMLElement>;
const graphs = document.getElementsByClassName('expenses-chart__bar') as HTMLCollectionOf<HTMLElement>;
const date = new Date().toUTCString().toLowerCase().slice(0, 3);

const handleGraphicAmounts = (): void => {
  const amountElements: HTMLElement[] = [...amountContainer];
  amountElements.forEach((element: HTMLElement, index: number) => {
    element.innerHTML = `$${data[index].amount}`;
  });
};

const handleGraphics = (): void => {
  const graphList: HTMLElement[] = [...graphs];
  const THREE = 3;
  graphList.forEach((graph: HTMLElement, index: number) => {
    graph.style.height = `${THREE * data[index].amount}px`;
    if (data[index].day === date) graph.style.backgroundColor = 'hsl(186, 34%, 60%)';
  });
};

handleGraphicAmounts();
handleGraphics();
