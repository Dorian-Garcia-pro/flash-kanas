import "./Deck.scss";
import "./GramCombis.scss";
import {} from "../cardSlice.js";

function GramPauses() {
  return (
    <div className="containerDigrammes">
      <div className="digrammesExplication">
        <p>
          La langue japonaise utilise parfois une pause pour marquer un temps
          d'arrêt juste avant une consonne dans un mot. Cette pause a une durée
          équivalente à celle d'une syllabe normale et s'applique aux hiraganas
          et aux katakanas. En romaji, cette pause est notée en doublant la
          consonne qui précède le son, tandis qu'en kana, on utilise un petit
          "tsu" (っ en hiragana et ッ en katakana). La pause est lue en marquant
          un temps d'arrêt pour les sons T, K et P, tandis que pour les sons S
          et Z, elle prolonge le son. Il est important de noter que la pause
          change le mot et que la prononciation est cruciale, en particulier
          dans les conjugaisons de verbes où elle est souvent utilisée.{" "}
          <br></br>Par exemple, "した" signifie "je faisais", tandis que
          "しった" signifie "je savais".
        </p>
        <p>Exemple :</p>
        <p>
          <ul>
            <li>
              か<span style={{ color: "red" }}>っ</span>こいい (cool, classe)
            </li>
            <li>
              き<span style={{ color: "red" }}>っ</span>と (certainement)
            </li>
            <li>
              あ<span style={{ color: "red" }}>っ</span>ち (là-bas)
            </li>
            <li>
              き<span style={{ color: "red" }}>っ</span>ぷ (billet)
            </li>
            <li>
              が<span style={{ color: "red" }}>っ</span>かり (déçu)
            </li>
            <li>
              か<span style={{ color: "red" }}>っ</span>ぱ (kappa, créature
              mythique japonaise)
            </li>
          </ul>
        </p>
      </div>
      <div className="allDigrammes"></div>
    </div>
  );
}

export default GramPauses;
