import NextLink from "next/link";

interface Props {
	href: string;
	text: string;
}

export const Link = ({ href, text }: Props) => {
	return (
		<NextLink href={href} className="hover:text-accent hover:underline">
			{text}
		</NextLink>
	);
};
