import { useState } from "react";
import splashImage from "@/assets/co-chcesz-wejscie.jpg";

/**
 * Pełnoekranowa "brama wejściowa" widoczna przy każdym wejściu na stronę główną.
 * Domyślnie widoczna od razu (także w HTML renderowanym przez serwer) — dzięki temu
 * nie ma ułamka sekundy, w którym widać stronę pod spodem, zanim pojawi się zasłona.
 * Kliknięcie (np. na kaczkę) chowa zasłonę i odsłania resztę strony.
 */
export function EntrySplash() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  if (!visible) return null;

  function handleEnter() {
    setClosing(true);
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
