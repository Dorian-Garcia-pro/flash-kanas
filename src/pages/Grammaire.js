import React from "react";
import "./Grammaire.scss";
import { useState } from "react";
import GramCombis from "../components/GramCombis.js";
import GramModifs from "../components/GramModifs.js";
import GramPauses from "../components/GramPauses.js";
import GramAllongs from "../components/GramAllongs.js";

function Grammaire() {
  const [grammmaireChapitre, setGrammmaireChapitre] = useState("pauses");
  const grammaireChapitresList = [
    { id: 1, nom: "combinaisons" },
    { id: 2, nom: "modifications" },
    { id: 3, nom: "pauses" },
    { id: 4, nom: "allongements" },
  ];

  const grammaireChapitresContent = () => {
    switch (grammmaireChapitre) {
      case "combinaisons":
        return <GramCombis />;

      case "modifications":
        return <GramModifs />;

      case "pauses":
        return <GramPauses />;

      case "allongements":
        return <GramAllongs />;

      default:
        return <div>Invalid value</div>;
    }
  };

  return (
    <div id="grammaireMainContainer">
      <div id="navGrammaire">
        <div className="buttonsFiltersContainer navGrammaire">
          <div className="leftColBtnRowAll">
            {grammaireChapitresList.map((chapitre) => (
              <div
                className={
                  grammmaireChapitre === chapitre.nom
                    ? "btn btnToggleFilterHiraganas btnToggleFilterSelected "
                    : "btn btnToggleFilterHiraganas"
                }
                onClick={() => setGrammmaireChapitre(chapitre.nom)}
              >
                <p>
                  {chapitre.nom.charAt(0).toUpperCase() + chapitre.nom.slice(1)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {grammaireChapitresContent()}
    </div>
  );
}

export default Grammaire;
