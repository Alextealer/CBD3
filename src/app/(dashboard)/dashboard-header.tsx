import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DashboardCartTrigger } from "./profile/dashboard/cart-trigger";

interface Props {
  title: string;
}

export function DashboardHeader({ title }: Props) {
  return (
    <div data-reveal className="flex items-center justify-between mb-8">
      <h1 className="text-[30px] font-semibold tracking-[-0.02em]">{title}</h1>
      <div className="flex items-center gap-3">
        <DashboardCartTrigger />
        <Link href="/catalog">
          <Button className="rounded-full h-11 px-5 text-[12px] font-bold uppercase tracking-wider bg-[#6c3fee] hover:bg-[#5a2fd8] text-white">
            Creer une commande
          </Button>
        </Link>
      </div>
    </div>
  );
}
