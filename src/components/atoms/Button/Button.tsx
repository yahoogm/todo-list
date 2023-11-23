import Link from 'next/link';

type BtnProps = {
  text: string;
  btnColor: string;
  btnType?: 'submit' | 'reset';
  width: 'w-full' | 'btn' | 'btn-sm' | 'btn-lg' | 'btn-xs';
  link?: boolean;
  href?: string;
};

const Button = ({ text, btnColor, btnType, width, link, href }: BtnProps) => {
  const linkHref = link ? href || '/' : '/';
  return (
    <>
      {link ? (
        <Link
          href={linkHref}
          className={`btn ${width} text-white capitalize ${btnColor}`}
        >
          {text}
        </Link>
      ) : (
        <button
          className={`btn ${width} text-white capitalize ${btnColor}`}
          type={btnType}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
