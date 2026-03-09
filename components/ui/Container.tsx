import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function Container({ children, className, id }: ContainerProps) {
    return (
        <div id={id} className={cn("container-custom", className)}>
            {children}
        </div>
    );
}
