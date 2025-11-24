import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  Card,
  CardBody,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import "./OrderPage.css";

let malzemelerArr = [
  "Mısır",
  "Sarımsak",
  "Ananas",
  "Sosis",
  "Soğan",
  "Sucuk",
  "Biber",
  "Kabak",
  "Kanada Jambonu",
  "Domates",
  "Jalepeno",
  "Mantar",
  "Tavuk Izgara",
];

const initalValues = {
  isim: "",
  boyutSec: "",
  hamurSec: "",
  siparisNotu: "",
  ekMalzemeler: [],
};

export default function OrderPage() {
  const [formData, setFormData] = useState(initalValues);

  const [toplamFiyat, setToplamFiyat] = useState(0);
  const [pizzaBoyutFiyat, setPizzaBoyutFiyat] = useState(0);
  const [ekMalzemelerFiyat, setEkMalzemelerFiyat] = useState(0);

  const [errors, setErrors] = useState({
    isim: false,
    boyutSec: false,
    hamurSec: false,
    ekMalzemeler: false,
  });

  const [isValid, setIsValid] = useState(false);

  const [sayac, setSayac] = useState(1);

  const toplamSipSayaci = (buton) => {
    if (buton == "Arttır") {
      setSayac(sayac + 1);
    } else if (buton == "Azalt" && sayac > 1) {
      setSayac(sayac - 1);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({ ...formData, [name]: value });

    if (type === "checkbox") {
      if (checked) {
        setFormData({
          ...formData,
          ekMalzemeler: [...formData.ekMalzemeler, value],
        });
      } else {
        setFormData({
          ...formData,
          ekMalzemeler: formData.ekMalzemeler.filter((item) => item !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (type === "radio") {
      if (value == "Küçük") {
        setPizzaBoyutFiyat(85.5);
      } else if (value == "Orta") {
        setPizzaBoyutFiyat(105.5);
      } else if (value == "Büyük") {
        setPizzaBoyutFiyat(125.5);
      }
    }

    if (name == "isim") {
      if (value.trim().length >= 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  useEffect(() => {
    setEkMalzemelerFiyat(formData.ekMalzemeler.length * 5);
  }, [formData.ekMalzemeler]);

  useEffect(() => {
    setToplamFiyat((pizzaBoyutFiyat + ekMalzemelerFiyat) * sayac);
  }, [pizzaBoyutFiyat, sayac, ekMalzemelerFiyat]);

  useEffect(() => {
    const isimValid = formData.isim.trim().length >= 3;
    const boyutValid =
      formData.boyutSec === "Küçük" ||
      formData.boyutSec === "Orta" ||
      formData.boyutSec === "Büyük";

    const hamurValid =
      formData.hamurSec === "İnce" ||
      formData.hamurSec === "Orta" ||
      formData.hamurSec === "Kalın";

    const malzemeValid =
      formData.ekMalzemeler.length >= 4 && formData.ekMalzemeler.length <= 10;

    if (isimValid && boyutValid && hamurValid && malzemeValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  const history = useHistory();

  return (
    <div className="all">
      <header className="orderPizza">
        <nav>
          <img src="./public/images/logo.svg"></img>

          <a className="ustNava" href="/">
            Ana Sayfa
          </a>
          <a className="ustNava" href="#">
            Sipariş Oluştur
          </a>
        </nav>
      </header>

      <div className="main">
        <Card className="card">
          <CardBody className="cardBody">
            <div>
              <h4>Position Absolute Acı Pizza</h4>
              <p
                style={{
                  display: "inline-block",
                  fontWeight: "bold",
                  marginRight: "120px",
                }}
              >
                85.50₺{" "}
              </p>
              <span style={{ display: "inline-block", marginRight: "50px" }}>
                4.9
              </span>
              <span style={{ display: "inline-block" }}>200</span>
            </div>
            <Form className="form" onSubmit={handleSubmit}>
              <FormText className="formText">
                Frontent Dev olarak hala position:absolute kullanıyorsan bu çok
                acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
                çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
                olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen,
                genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan
                oluşan İtalyan kökenli lezzetli bir yemektir.. Küçük bir pizzaya
                bazen pizzetta denir.
              </FormText>

              <FormGroup className="isim">
                <Label for="isim">İsim</Label>
                <Input
                  id="isim"
                  name="isim"
                  placeholder="İsminizi Giriniz"
                  type="text"
                  onChange={handleChange}
                  value={formData.isim}
                />
              </FormGroup>

              <Row>
                <Col md={6}>
                  <FormGroup tag="fieldset">
                    <label>
                      Pizza Boyutu <span style={{ color: "red" }}>*</span>
                    </label>
                    <FormGroup check>
                      <Input
                        name="boyutSec"
                        type="radio"
                        onChange={handleChange}
                        value="Küçük"
                      />
                      <Label check>Küçük</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        name="boyutSec"
                        type="radio"
                        onChange={handleChange}
                        value="Orta"
                      />
                      <Label check>Orta</Label>
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        name="boyutSec"
                        type="radio"
                        onChange={handleChange}
                        value="Büyük"
                      />
                      <Label check>Büyük</Label>
                    </FormGroup>
                  </FormGroup>
                </Col>

                <Col md={6}>
                  <FormGroup>
                    <Label for="hamurSec">
                      Hamur Seç <span style={{ color: "red" }}>*</span>
                    </Label>
                    <Input
                      id="hamurSec"
                      name="hamurSec"
                      type="select"
                      onChange={handleChange}
                      value={formData.hamurSec}
                    >
                      <option>Hamur Kalınlığı</option>
                      <option>İnce</option>
                      <option>Orta</option>
                      <option>Kalın</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for="siparisNotu">Sipariş Notu</Label>
                <Input
                  id="siparisNotu"
                  name="siparisNotu"
                  type="textarea"
                  onChange={handleChange}
                  value={formData.siparisNotu}
                />
              </FormGroup>

              <div className="ekMalz">
                <FormGroup check>
                  <label>Ek Malzemeler</label>
                  <FormText className="formText1">
                    En fazla 10 en az 4 malzeme seçmelisiniz. 5₺
                  </FormText>

                  {malzemelerArr.map((malzeme) => (
                    <div key={malzeme}>
                      <Label check>
                        <Input
                          type="checkbox"
                          name="ekMalzemeler"
                          value={malzeme}
                          onChange={handleChange}
                          checked={formData.ekMalzemeler.includes(malzeme)}
                        />
                        {malzeme}
                      </Label>
                    </div>
                  ))}
                </FormGroup>
              </div>

              <Row>
                <Col md={6}>
                  <div className="pizza-onay">
                    <div className="sayac">
                      <Button
                        className="sayacButon"
                        onClick={() => toplamSipSayaci("Azalt")}
                      >
                        -
                      </Button>
                      <p>{sayac}</p>
                      <Button
                        className="sayacButon"
                        onClick={() => toplamSipSayaci("Arttır")}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="sipCardBody">
                    <div className="sipGenel">
                      <h4>Sipariş Toplamı</h4>
                      <div className="secimler">
                        <p>Seçimler: {ekMalzemelerFiyat}</p>
                      </div>
                      <div className="toplam">
                        <p>Toplam: {toplamFiyat}</p>
                      </div>
                      <div className="sipButton">
                        <Link to="/complete">
                          <button
                            disabled={!isValid}
                            className="siparis-button"
                          >
                            Sipariş Ver
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
