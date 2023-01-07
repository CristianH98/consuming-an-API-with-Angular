package com.example.demobackend;

import com.example.demobackend.domain.User;
import com.example.demobackend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class DemoBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoBackendApplication.class, args);
    }

    @Bean
    CommandLineRunner init(UserRepository userRepository){
        return args -> {
            Stream.of("John", "Kate", "Jennifer", "Chris").forEach(name -> {
                User user = new User(name, name.toLowerCase() + "@gmail.com");
                userRepository.save(user);
            });
            userRepository.findAll().forEach(System.out::println);
        };
    }
}
