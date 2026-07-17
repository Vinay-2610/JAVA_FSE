package com.cognizant;

import org.springframework.stereotype.Service;

@Service
public class ApiService {

    private final RestClient restClient;

    public ApiService(RestClient restClient) {
        this.restClient = restClient;
    }

    public String fetchData() {
        return restClient.getData();
    }
}