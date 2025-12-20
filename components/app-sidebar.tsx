"use client";

import { useRouter } from "next/navigation";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { navLinks } from "@/lib/constants";

export function AppSidebar() {
	const router = useRouter();
	const { toggleSidebar } = useSidebar();

	const handleClick = (href: string) => {
		router.push(href);
		toggleSidebar();
	};

	return (
		<Sidebar className="md:hidden">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu className="pt-4 gap-4">
							{navLinks.map((link) => (
								<SidebarMenuItem key={link.href}>
									<SidebarMenuButton
										asChild
										className="hover:bg-transparent hover:underline"
									>
										<button
											type="button"
											onClick={() => handleClick(link.href)}
											className="cursor-pointer text-lg! font-bold justify-center"
										>
											{link.label}
										</button>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
