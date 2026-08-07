import { SpotlightNavbar } from "@/components/ui/spotlight-navbar"


type Props = {}

export default function Header({}: Props) {
    return (
        <SpotlightNavbar
            items={[
                { label: "Sobre", href: "#about" },
                { label: "Projetos", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contato", href: "#contact"}
            ]}
        />
    )
}