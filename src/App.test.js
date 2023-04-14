import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render circles on click', () => {
    const { container } = render(<App />);
    const page = container.firstChild;
    fireEvent.click(page, { nativeEvent: { offsetX: 50, offsetY: 50 } });
    expect(container.querySelectorAll('.circle')).toHaveLength(1);
  });

  it('should render undo and redo buttons', () => {
    const { getByText } = render(<App />);
    expect(getByText('Desfazer')).toBeInTheDocument();
    expect(getByText('Refazer')).toBeInTheDocument();
  });

  it('should undo and redo circles', () => {
    const { container, getByText } = render(<App />);
    const page = container.firstChild;
    fireEvent.click(page, { nativeEvent: { offsetX: 50, offsetY: 50 } });
    fireEvent.click(page, { nativeEvent: { offsetX: 60, offsetY: 60 } });
    expect(container.querySelectorAll('.circle')).toHaveLength(2);
    fireEvent.click(getByText('Desfazer'));
    expect(container.querySelectorAll('.circle')).toHaveLength(1);
    fireEvent.click(getByText('Refazer'));
    expect(container.querySelectorAll('.circle')).toHaveLength(2);
  });

  it('should disable the undo button when there is no history', () => {
    const { getByText } = render(<App />);
    const undoButton = getByText('Desfazer');
    expect(undoButton).toBeDisabled();
  });

  it('should disable the redo button when there is no future', () => {
    const { getByText, container } = render(<App />);
    const page = container.firstChild;
    const undoButton = getByText('Desfazer');
    const redoButton = getByText('Refazer');
    fireEvent.click(page, { nativeEvent: { offsetX: 50, offsetY: 50 } });
    expect(undoButton).not.toBeDisabled();
    expect(redoButton).toBeDisabled();
    fireEvent.click(undoButton);
    expect(undoButton).toBeDisabled();
    expect(redoButton).not.toBeDisabled();
    fireEvent.click(redoButton);
    expect(undoButton).not.toBeDisabled();
    expect(redoButton).toBeDisabled();
  });
});