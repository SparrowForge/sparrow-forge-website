
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";


export const metadata = {
  title: "Sparrow Forge",
  description: "Custom Software & App Solutions Built for Your Business",
};
;

export default async function RootLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html  suppressHydrationWarning >
      <body suppressHydrationWarning
        className=""
        
      >
        <NextIntlClientProvider> 
          {children}
        </NextIntlClientProvider>

      </body>
    </html>
  );
}
