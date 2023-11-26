import Link from 'next/link';

type BtnProps = {
  text?: string;
  btnColor: string;
  btnType?: 'submit' | 'reset';
  width: 'w-full' | 'btn' | 'btn-sm' | 'btn-lg' | 'btn-xs';
  link?: boolean;
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({
  text,
  btnColor,
  btnType,
  width,
  link,
  href,
  children,
  onClick,
}: BtnProps) => {
  const linkHref = link ? href || '/' : '/';
  return (
    <>
      {link ? (
        <Link
          href={linkHref}
          className={`btn ${width} text-white capitalize ${btnColor}`}
        >
          {children}
          {text}
        </Link>
      ) : (
        <button
          className={`btn ${width} text-white capitalize ${btnColor}`}
          type={btnType}
          onClick={onClick}
        >
          {children}
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
