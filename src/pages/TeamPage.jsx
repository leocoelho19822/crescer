// eslint-disable-next-line
import React from "react";

import Button from "../components/Button";
import { FiPhoneCall } from "react-icons/fi";


export default function TeamPage() {
  

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 text-zinc-800">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Equipa Técnica
          </h1>
           
          
    
    
          <div className="prose prose-zinc max-w-none">
            
            
            <p className="font-bold mb-3">O projeto conta com uma equipa multidisciplinar composta por:</p>
            <ul className="list-disc list-outside pl-8 space-y-2 text-gray-800">
            <li>Psicóloga clínica do Centro de Saúde de Águeda</li>
            <li>Educadora de infância</li>
            <li>Médica</li>
            <li>Nutricionista</li>
            <li>Fisioterapeuta</li>
            <li>Assistente social</li>
            <li>Colaboração com parceiros como a Universidade de Aveiro e o Centro Hospitalar do Baixo Vouga</li>
            </ul>

            

            <p className="font-bold mt-3">Para participar ou saber mais</p>
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
            

            <p className="italic text-3xl my-10">“Se mudarmos o início da história, mudamos toda a história.”</p>

            

          </div>
    </div>
  );
}
