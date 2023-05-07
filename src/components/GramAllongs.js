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
          horizontale au dessus de la voyelle allongée. 「ど
          <span style={{ color: "red" }}>う</span>も」= D
          <span style={{ color: "red" }}>ō</span>mo
        </p>
        <p>
          <u>Exemples :</u>
        </p>
        <ul>
          <li>
            「か」(ka) s'allonge avec「あ」pour former「か
            <span style={{ color: "red" }}>あ</span>」(kaa)
          </li>
          <li>
            「き」(ki) s'allonge avec「い」pour former「き
            <span style={{ color: "red" }}>い</span>」(kii)
          </li>
          <li>
            「こ」(ko) s'allonge avec「う」pour former「こ
            <span style={{ color: "red" }}>う</span>」(kou)
          </li>
        </ul>
        <p>
          Il est important de garder le son d'une voyelle assez longtemps pour
          éviter des confusions, comme dire "ici"（ここ） au lieu de "lycée"（こ
          <span style={{ color: "red" }}>う</span>こ
          <span style={{ color: "red" }}>う</span>） ou "femme d'âge moyen ou
          tante"（おばさん） au lieu de "grand-mère"（おば
          <span style={{ color: "red" }}>あ</span>さん）. Il y a de rares
          exceptions où un son de voyelle / e / est allongé en ajoutant 「え」
          ou un son de voyelle / o / est allongé par 「お」, comme dans les mots
          「おね <span style={{ color: "red" }}>え</span>さん」、「お
          <span style={{ color: "red" }}>お</span>い」 et 「お
          <span style={{ color: "red" }}>お</span>き
          <span style={{ color: "red" }}>い</span>」.
        </p>
      </div>
      <div className="allDigrammes"></div>
    </div>
  );
}

export default GramAllongs;
