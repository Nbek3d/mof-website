import { logo } from '../utils/const';

const Footer = () => {
    return (
        <div className='footer '>
            <ul className='container dfa jus-beet content-text ta '>

                <li className='db'>
                    <img src={logo} alt="logo" className="logo" />
                    <p className='col-fff'>MOF</p>
                </li>

                <li className='db'>

                    <p>
                        <a href="https://mudofaa.uz/">Mudofaa Vazirligi</a>
                    </p>

                    <p>
                        <a href="https://edu.uz/">Oliy Ta'lim Vazirligi</a>
                    </p>

                </li>

                <li className='db'>

                    <p>
                        <a href="https://tuit.uz/">TATU</a>
                    </p>

                    <p>
                        <a href="https://lex.uz/">O'zbekiston Qonunchiligi</a>
                    </p>

                </li>

                <li className='db'>

                    <p>
                        <a href="https://my.gov.uz/">My.gov.uz</a>
                    </p>

                    <p>
                        <a href="https://qabul.mvahi.uz/">AKT va AHI</a>
                    </p>

                </li>

            </ul>
        </div>
    )
}

export default Footer
