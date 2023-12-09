export interface Order {
  price: number,
  size: number,
}
export interface ServerRespond {
  stock: string,
  top_bid: Order,
  top_ask: Order,
  timestamp: Date,
  upper_bound: number,
  lower_bound: number,
  historical_ratio: number
}

class DataStreamer { 
  static API_URL: string = "http://localhost:8080/query?id=1&get-historical-ratio="

  static getData(callback: (data: ServerRespond[]) => void, getHistoricalRatio: string=""): void {
    const request = new XMLHttpRequest();
    request.open('GET', DataStreamer.API_URL + getHistoricalRatio, false);

    request.onload = () => {
      if (request.status === 200) {
        callback(JSON.parse(request.responseText));
      } else {
        alert ('Request failed');
      }
    }

    request.send();
  }
}

export default DataStreamer;