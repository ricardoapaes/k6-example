import http from 'k6/http';
import { check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const protocol = __ENV.PROTOCOL != null ? __ENV.PROTOCOL : "https";
export const host = __ENV.HOST != null ? __ENV.HOST : "crn1.com.br";

export const options = {
  vus: 100,
  duration: '60s',
  thresholds: {
    http_req_duration: ['p(95)<200', 'p(90)<150', 'avg<120', 'max<1000'],
    http_reqs: ['count>8000'],
  },
};

export default function () {
  const ok = {
    'status is 200': (r) => r.status === 200,
    // 'response body': (r) => {
    //   if(r.body === undefined || r.body === null) {
    //     return false;
    //   }

    //   return JSON.parse(r.body).ok === 's';
    // },
  };

  check(http.get(protocol + '://' + host + '/'), ok);
  check(http.get(protocol + '://' + host + '/2023/10/veiculo-para-o-lar-dos-idosos-de-campo-mourao-fotos/'), ok);
  check(http.get(protocol + '://' + host + '/2023/10/temporal-no-sul-do-brasil-veja-como-a-chuva-de-ate-400-mm-afeta-o-parana-e-sc/'), ok);
  check(http.get(protocol + '://' + host + '/2023/10/veiculo-para-o-lar-dos-idosos-de-campo-mourao-fotos/'), ok);
  check(http.get(protocol + '://' + host + '/2023/10/c-mourao-futsal-e-toledo-decidem-quem-avanca-as-semifinais-do-paranaense-2023/'), ok);
}