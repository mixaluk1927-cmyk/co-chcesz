import { useEffect, useState } from "react";
import splashImage from "@/assets/co-chcesz-wejscie.jpg";

const STORAGE_KEY = "co-chcesz-wejscie-widziane";

/**
 * Pełnoekranowa "brama wejściowa" widoczna przy pierwszym wejściu na stronę główną.
 * Kliknięcie (np. na kaczkę) chowa zasłonę i odsłania resztę strony.
 * Po wejściu raz w danej sesji przeglądarki nie pokazuje się ponownie.
 */
export function EntrySplash() {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function handleEnter() {
    setClosing(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore ‒ brak dostępu do sessionStorage nie powinien blokować wejścia
    }
    window.setTimeout(() => setVisible(false), 500);
  }

  return (
    <button
      type="button"
      onClick={handleEnter}
      aria-label="Wejdź na stronę Co Chcesz?"
      className={`fixed inset-0 z-[100] block h-[100svh] w-full cursor-pointer overflow-hidden bg-ink p-0 transition-opacity duration-500 ease-out ${
        closing ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={splashImage}
        alt="Co Chcesz? — kliknij, aby wejść na stronę"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute inset-x-0 bottom-8 mx-auto w-fit animate-pulse rounded-full bg-ink/70 px-6 py-2 text-sm font-black uppercase tracking-wide text-white sm:bottom-12">
        Kliknij, aby wejść
      </span>
    </button>
  );
}
