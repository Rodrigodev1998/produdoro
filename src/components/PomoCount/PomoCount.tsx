import { useTasksStore, useTimerStore } from '@stores';
import { colors, spacing } from '@utils';
import styled from 'styled-components';
import { shallow } from 'zustand/shallow';

const S = {
  Container: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: ${spacing.XXXS};
    margin-bottom: ${spacing.XL};
  `,

  Count: styled.button`
    all: unset;
    color: ${colors.WHITE};
    cursor: pointer;
    opacity: 0.7;

    &:hover {
      opacity: 1;
    }

    &:focus-visible {
      outline: auto;
    }
  `,
};

export function PomoCount() {
  const { currentTimerName, done, reset } = useTimerStore(
    (state) => ({
      done: state.done,
      currentTimerName: state.currentTimerName,
      reset: state.reset,
    }),
    shallow,
  );
  const taskTitle = useTasksStore((state) => state.selectedTask?.title);

  const defaultTitle =
    currentTimerName === 'POMO' ? 'Tempo para foco!' : 'Tempo de pausa!';

  const title = taskTitle || defaultTitle;

  const handleClick = () => {
    const shouldReset = confirm('Deseja resetar os pomodoros feitos ?');
    if (!shouldReset) return;
    reset();
  };

  return (
    <S.Container>
      <S.Count
        type="button"
        aria-label={`Reset pomodoro count #${done}`}
        onClick={handleClick}
      >
        #{done}
      </S.Count>
      <p>{title}</p>
    </S.Container>
  );
}

export default PomoCount;
