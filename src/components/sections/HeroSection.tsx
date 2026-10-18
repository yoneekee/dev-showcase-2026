import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarIllustration from "@/assets/avatar-illustration.png";

const HeroSection = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="flex flex-col-reverse items-start gap-8 md:flex-row md:items-center md:justify-between md:gap-12">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium text-primary">
              業務システムエンジニア ／ ERP・生産管理・会計
            </p>
            <h1 className="text-3xl font-bold leading-snug sm:text-5xl">
              キム ヨンジョン
              <span className="mt-2 block text-lg font-normal text-muted-foreground sm:text-xl">
                金 延定
              </span>
            </h1>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              大阪
            </p>
            <p className="mb-5 mt-8 text-xl font-semibold leading-relaxed text-primary sm:text-2xl">
              業務を理解し、使われ続けるシステムに落とし込む。
            </p>
            <p className="text-sm text-muted-foreground sm:text-base">
              C#.NET・VB.NETを中心に、製造業の生産・在庫・会計ERPを基本設計から保守・ヘルプデスクまで一貫して担当しています。顧客の抽象的な要望を具体的な仕様に整理し、現場で使い続けられるシステムをつくることを大切にしています。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#experience">
                  職務経歴を見る
                  <ArrowDown />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a
                  href="https://s-prime-erp.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  S-PRIME ERP デモ
                  <ExternalLink />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted sm:h-48 sm:w-48 md:h-56 md:w-56">
            <img
              src={avatarIllustration}
              alt="キム ヨンジョンのアバター"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <dl className="mt-12 grid grid-cols-2 gap-y-6 border-y border-border py-7 sm:mt-16 sm:grid-cols-4">
          {[
            ["実務経験", "3年以上"],
            ["参画プロジェクト", "7件"],
            ["担当業界", "5分野"],
            ["JLPT", "N1"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border-l border-border pl-5 first:border-l-0 first:pl-0"
            >
              <dt className="text-xs text-muted-foreground sm:text-sm">
                {label}
              </dt>
              <dd className="mt-1 text-2xl font-semibold text-primary">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section id="about" className="portfolio-section">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">自己紹介</h2>
          <div className="max-w-3xl space-y-5 text-sm text-muted-foreground sm:text-base">
            <p>
              大学では哲学を専攻し、卒業後は韓国・昌原市の区役所で住民登録や福祉関連の業務に携わりました。行政の現場で、制度や業務の流れを正確に理解し、利用者にわかりやすく伝えることの大切さを学びました。
            </p>
            <p>
              その後、Java・Springの実務者養成課程とビッグデータ開発者研修を経てエンジニアに転身しました。2023年からは日本のSIerで官公庁や電力関連のシステム改修に携わり、現在は製造業向けのERP・生産管理システムを中心に、設計から保守まで一貫して担当しています。
            </p>
            <p>
              働きながら韓国放送通信大学校コンピュータ科学科で学び、2026年2月に卒業しました。
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default HeroSection;
