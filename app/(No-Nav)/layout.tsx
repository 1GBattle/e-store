import StoreProvider from "@/app/redux/StoreProvider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <main className="flex-grow">{children}</main>
    </StoreProvider>
  );
}
