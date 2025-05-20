import Link from 'next/link';
import cn from 'classnames';

interface Props {
    isNavItem?: boolean;
    isSelected?: boolean;
    isMobile?: boolean;
    isBanner?: boolean;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    [rest: string]: any;
}

export default function NavLink({
    isNavItem,
    isSelected,
    isMobile,
    isBanner,
    href,
    onClick,
    children,
    className,
    ...rest
}: Props) {
    const combinedClassName = cn(
        className,
        'rounded-md font-semibold',
        {
            'hover:text-blue-600': isNavItem,
            'text-blue-600': isSelected,
            'text-2xl sm:text-3xl': isBanner,
        }
    );

    if (!href) {
        return (
            <span className={combinedClassName} role='button' onClick={onClick} {...rest}>
                {children}
            </span>
        );
    }

    return (
        <Link
            href={href}
            className={combinedClassName}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
            {...rest}
        >
            {children}
        </Link>
    );
}