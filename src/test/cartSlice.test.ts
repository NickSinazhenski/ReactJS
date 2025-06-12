import { selectTotalCount } from '../redux/cartSlice';

describe('selectTotalCount', () => {
  it('должен возвращать 0, если корзина пуста', () => {
    const mockState = {
      yourData: { items: [] }
    } as any;

    const result = selectTotalCount(mockState);
    expect(result).toBe(0);
  });

  it('должен возвращать сумму всех count в корзине', () => {
    const mockState = {
      yourData: {
        items: [
          { id: 1, count: 2 },
          { id: 2, count: 3 },
        ]
      }
    } as any;

    const result = selectTotalCount(mockState);
    expect(result).toBe(5);
  });
});