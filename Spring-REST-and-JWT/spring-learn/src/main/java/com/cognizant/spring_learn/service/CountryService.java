package com.cognizant.spring_learn.service;

import com.cognizant.spring_learn.Country;
import com.cognizant.spring_learn.service.exception.CountryNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CountryService {

    public List<Country> getAllCountries() {

        List<Country> countries = new ArrayList<>();

        Country india = new Country();
        india.setCode("IN");
        india.setName("India");

        Country usa = new Country();
        usa.setCode("US");
        usa.setName("United States");

        countries.add(india);
        countries.add(usa);

        return countries;
    }

    public Country getCountry(String code) {

        return getAllCountries()
                .stream()
                .filter(country ->
                        country.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElseThrow(CountryNotFoundException::new);
    }
}