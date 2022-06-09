package com.robdig.quarkus;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
//import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.Matchers.greaterThan;


@QuarkusTest
public class ClientBancoMundialResourceTest {

    @Test
    public void testHelloEndpoint() {
        given()
          .when().get("v1/indicator/BR")
          .then()
             .statusCode(200)
             .body("$.size()", greaterThan(1));
    }

}