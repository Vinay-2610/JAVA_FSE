package com.cognizant;

import org.springframework.stereotype.Service;

@Service
public class ExternalApiService {

    private final ExternalApi externalApi;

    public ExternalApiService(ExternalApi externalApi) {
        this.externalApi = externalApi;
    }

    public String getData() {
        return externalApi.fetchData();
    }
}