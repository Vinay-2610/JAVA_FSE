package com.cognizant;

import org.springframework.stereotype.Service;

@Service
public class FileService {

    private final FileReader fileReader;

    public FileService(FileReader fileReader) {
        this.fileReader = fileReader;
    }

    public String readFile() {
        return fileReader.read();
    }
}