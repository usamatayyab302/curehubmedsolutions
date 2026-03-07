import { getSiteNavigation } from "@/lib/site-navigation";
import HeaderClient from "./header-client";

export default async function Header() {
  const navigation = await getSiteNavigation();

  return <HeaderClient items={navigation.header} />;
}



