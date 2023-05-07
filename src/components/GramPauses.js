import "./Deck.scss";
import "./GramCombis.scss";
import {} from "../cardSlice.js";

function GramPauses() {
  return (
    <div className="containerDigrammes">
      <div id="pausesExplication" className="digrammesExplication">
        <article>
          <p>
            En japonaise on utilise parfois une pause pour marquer un temps
            d'arrêt juste avant une consonne dans un mot.
          </p>
          <p>
            Cette pause a une durée équivalente à celle d'une syllabe normale et
            s'applique aux hiraganas et aux katakanas.
          </p>
          <p>
            En romaji, cette pause est notée en doublant la consonne qui précède
            le son, tandis qu'en kana, on utilise un petit "tsu".「っ」 en
            hiragana et 「ッ」 en katakana.
          </p>
          <p>
            La pause est lue en marquant un temps d'arrêt pour les sons T, K et
            P, tandis que pour les sons S et Z, elle prolonge le son.
          </p>
          <p>
            Il est important de noter que la pause change le mot et que la
            prononciation est cruciale, en particulier dans les conjugaisons de
            verbes où elle est souvent utilisée.
          </p>
          <p>
            Par exemple, 「した」(shita) signifie "je faisais", tandis que 「し
            <span style={{ color: "red" }}>っ</span>た」(shitta) signifie "je
            savais".
          </p>
        </article>
        <p>
          <u>Exemples :</u>
        </p>
        <p>
          <ul>
            <li>
              か<span style={{ color: "red" }}>っ</span>こいい (kakkoi) = cool,
              classe
            </li>
            <li>
              き<span style={{ color: "red" }}>っ</span>と (kitto) =
              certainement
            </li>
            <li>
              あ<span style={{ color: "red" }}>っ</span>ち (acchi) = là-bas
            </li>
            <li>
              き<span style={{ color: "red" }}>っ</span>ぷ (kippu) = billet
            </li>
            <li>
              が<span style={{ color: "red" }}>っ</span>かり (gakkari) = déçu
            </li>
            <li>
              か<span style={{ color: "red" }}>っ</span>ぱ (kappa) = un kappa,
              créature mythique japonaise
            </li>
          </ul>
        </p>
      </div>
      <div className="allDigrammes"></div>
    </div>
  );
}

export default GramPauses;
