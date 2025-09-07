// eslint-disable-next-line
import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import Button from "../components/Button";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Para participar ou saber mais
      </h1>

      <div className="prose prose-zinc max-w-none">
        <p>
          Fale com a sua médica ou enfermeira de família, ou contacte
          diretamente a equipa do Centro de Saúde de Águeda.
        </p>

        <a href="tel:234610210" aria-label="Ligar para Centro de Saúde de Águeda">
          <Button className="mt-6 inline-flex items-center gap-2 ">
            <FiPhoneCall size={20} />
            <span>234 610 210 (3ªs e 5ªs, 10h às 13h)</span>
          </Button>
        </a>

        <p className="italic text-3xl my-10">
          “Se mudarmos o início da história, mudamos toda a história.”
        </p>
      </div>
    </div>
  );
}
