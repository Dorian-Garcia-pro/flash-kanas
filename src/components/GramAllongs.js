import "./Deck.scss";
import "./GramCombis.scss";
import {} from "../cardSlice.js";

function GramAllongs() {
  return (
    <div className="containerDigrammes">
      <div className="digrammesExplication">
        <p>
          Les syllables peuvent être allongées en ajoutant les caractères
          「う」, 「い」 ou 「あ」 selon la voyelle précedente.
          <br></br>
          <br></br> Les syllabes en "a" s'allongent avec 「あ」 <br></br> Les
          syllabes en "i" et "e" s'allongent avec 「い」 <br></br> Les syllabes
          en "u" et "o" s'allongent avec 「う」
        </p>
        <p>
          En romaji un allongement peut etre representé par une barre
          horizontale au dessus de la voyelle allongée. 「どうも」= Dōmo
        </p>
        <p>Exemple :</p>
        <ul>
          <li>「か」(ka) s'allonge avec「あ」pour former「かあ」(kaa)</li>
          <li>「き」(ki) s'allonge avec「い」pour former「きい」(kii)</li>
          <li>「こ」(ko) s'allonge avec「う」pour former「こう」(kou)</li>
        </ul>
        <p>
          Il est important de garder le son d'une voyelle assez longtemps pour
          éviter des confusions, comme dire "ici"（ここ） au lieu de
          "lycée"（こうこう） ou "femme d'âge moyen ou tante"（おばさん） au
          lieu de "grand-mère"（おばあさん）. Il y a de rares exceptions où un
          son de voyelle / e / est allongé en ajoutant 「え」 ou un son de
          voyelle / o / est allongé par 「お」, comme dans les mots
          「おねえさん」、「おおい」 et 「おおきい」.
        </p>
      </div>
      <div className="allDigrammes"></div>
    </div>
  );
}

export default GramAllongs;
