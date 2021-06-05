import React from "react";
import apiConfig from "../apiKeys";
import DayCard from "./DayCards";
import CityAndCountry from "./cityAndCountry";
class WeekContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            fullData: [],
            dailyData: [],
            degreeType: "celsius",
            city: undefined,
            country: undefined,
        };
        // this.getWeather();
    }

    updateForecastDegree = (event) => {
        this.setState(
            {
                degreeType: event.target.value,
            },
            () => console.log(this.state),
        );
    };

    // getWeather = async()=>{
    //   const api_call = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=${apiConfig}`;
    //   const response = await api_call.json();
    //   console.log(response)
    //   fetch(api_call)
    //         .then((res) => res.json())
    //         .then((data) => {
    //            const dailyData = data.list.filter((reading) =>
    //             reading.dt_txt.includes("18:00:00"),
    //            );

      
    //   this.setState({
    //     fullData: data.list,
    //     dailyData: dailyData,
    //     city:response.name,
    //     country: response.sys.country
    //   })
    // }
  


    componentDidMount = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=metric&APPID=${apiConfig}`;
            const response = weatherURL.json();
            console.log(response
                );
         fetch(weatherURL)
            .then((res) => res.json())
            .then((data) => {
                const dailyData = data.list.filter((reading) =>
                    reading.dt_txt.includes("18:00:00"),
                );
                this.setState(
                    {
                        fullData: data.list,
                        dailyData: dailyData,
                        
                        
                        
                        
                        
                        
                    },
                    () => console.log(this.state),
                );
            });
    };
    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => (
            <DayCard reading={reading} key={index} />
        ));
    };
    render() {
        return (
            <div className="container">
                <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
                <CityAndCountry
                    city={this.state.city}
                    country={this.state.country}
                />

                <div className="row justify-content-center">
                    {this.formatDayCards()}
                </div>
            </div>
        );
    }
}

export default WeekContainer;
