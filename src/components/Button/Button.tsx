import { Button } from '@suid/material';

export type Props = {
  class?: string;
  variant?: 'contained' | 'outlined' | 'text';
  label: string;
  onClick?: ((event: Event) => void) | undefined;
  className?: string;
};

function WrapperButton({ variant, label, onClick, className }: Props) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      class={className}
      sx={{
        '&:hover': { background: variant === 'contained' ? '#1b77f5' : '' },
      }}
    >
      {label}
    </Button>
  );
}

export default WrapperButton;
