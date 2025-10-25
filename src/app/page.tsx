import { Navbar13 } from "@/components/ui/shadcn-io/navbar-13";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <div className="w-full min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar13 />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              {t("greeting")}
            </h1>
          </div>

          <Card className="border-2 border-slate-200 dark:border-slate-700">
            <CardHeader className="border-b-2 border-slate-200 dark:border-slate-700">
              <CardTitle className="text-3xl">{t("introduction")}</CardTitle>
              <CardDescription className="text-base">
                {t("courseValue")}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  {t("name")}
                </h2>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 ml-4">
                  Rafly Aziz Abdillah
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  {t("nim")}
                </h2>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 ml-4">
                  {t("nimValue")}
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  {t("course")}
                </h2>
                <p className="text-2xl font-bold text-slate-900 dark:text-slate-100 ml-4">
                  {t("courseValue")}
                </p>
              </div>

              <div className="pt-4 border-t-2 border-slate-200 dark:border-slate-700">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {t("description")}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-slate-600 dark:text-slate-400">
            <p className="text-sm">
              © 2025 Rafly Aziz Abdillah - {t("courseValue")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
