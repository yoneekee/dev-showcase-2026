import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight, X, Layers } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";

const PROJECT = {
  title: "S-PRIME ERP（個人制作）",
  description: "半導体精密機器メーカーを想定した、購買・出庫の承認ワークフローを中心とするERPのデモです。実務で担当している生産・在庫・会計領域の知識をもとに、業務フローと状態遷移を設計しました。",
  points: ["二段階承認・否認・差戻しの状態遷移を1か所で定義し、画面のボタンと連動", "ロール切替で申請から検収・売上確定まで一人で体験可能", "分納入庫（数量・LOT番号の記録）", "自動テスト（Vitest）"],
  role: "企画、業務設計、状態遷移・画面設計、仕様策定、検証。実装には生成AIツールを活用しました。",
  tech: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vitest"],
};
const ProjectsSection = () => {
  const [open, setOpen] = useState(false);
  return <Dialog.Root open={open} onOpenChange={setOpen}>
    <section id="work" className="portfolio-section">
      <h2 className="section-title">制作物</h2>
      <motion.article initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{once: true}} transition={{duration: 0.5}} className="rounded-lg border border-border bg-card">
        <Dialog.Trigger asChild><Button variant="ghost" className="h-auto w-full justify-start whitespace-normal p-6 text-left hover:bg-muted sm:p-8">
          <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-start">
            <Layers className="h-8 w-8 shrink-0 text-accent" />
            <div className="flex-1"><h3 className="mb-3 text-xl font-semibold sm:text-2xl">{PROJECT.title}</h3><p className="max-w-3xl text-sm font-normal leading-[1.7] text-muted-foreground sm:text-base">{PROJECT.description}</p><div className="mt-5 flex flex-wrap gap-2">{PROJECT.tech.map(tech => <span key={tech} className="rounded-md border border-border px-2 py-1 text-xs font-normal text-muted-foreground">{tech}</span>)}</div></div>
            <ArrowUpRight className="shrink-0 text-primary" />
          </div>
        </Button></Dialog.Trigger>
      </motion.article>
    </section>
    <AnimatePresence>{open && <Dialog.Portal forceMount>
      <Dialog.Overlay asChild><motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="fixed inset-0 z-50 bg-foreground/25 backdrop-blur-sm" /></Dialog.Overlay>
      <Dialog.Content asChild onCloseAutoFocus={event => event.preventDefault()}><motion.div initial={{x: "100%"}} animate={{x: 0}} exit={{x: "100%"}} transition={{duration: 0.3, ease: "easeOut"}} className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border-l border-border bg-background p-6 sm:p-10 lg:w-[58%]">
        <Dialog.Close asChild><Button variant="outline" size="icon" aria-label="閉じる" className="ml-auto flex"><X /></Button></Dialog.Close>
        <Dialog.Title className="mb-6 mt-8 text-2xl font-bold sm:text-3xl">{PROJECT.title}</Dialog.Title>
        <Dialog.Description className="text-sm text-muted-foreground sm:text-base">{PROJECT.description}</Dialog.Description>
        <h3 className="mb-4 mt-9 font-semibold text-primary">ポイント</h3><ul className="list-disc space-y-3 pl-5 text-sm text-muted-foreground sm:text-base">{PROJECT.points.map(point => <li key={point}>{point}</li>)}</ul>
        <h3 className="mb-3 mt-9 font-semibold text-primary">担当</h3><p className="text-sm text-muted-foreground sm:text-base">{PROJECT.role}</p>
        <h3 className="mb-3 mt-9 font-semibold text-primary">技術</h3><div className="mb-9 flex flex-wrap gap-2">{PROJECT.tech.map(tech => <span key={tech} className="rounded-md border border-border bg-muted px-3 py-1 text-sm">{tech}</span>)}</div>
        <Button asChild><a href="https://sprimeerp.netlify.app" target="_blank" rel="noopener noreferrer">デモを見る<ExternalLink /></a></Button>
      </motion.div></Dialog.Content>
    </Dialog.Portal>}</AnimatePresence>
  </Dialog.Root>;
};
export default ProjectsSection;
