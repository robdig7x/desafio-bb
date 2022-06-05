package com.robdig.quarkus.resources;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.rest.client.inject.RestClient;

import org.jboss.logging.Logger;

import com.robdig.quarkus.client.BancoMundialApiService;

@Path("v1")
public class IndicatorResource {

    private static final Logger LOG = Logger.getLogger(IndicatorResource.class);

    @Inject
    @RestClient
    BancoMundialApiService apiService;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/indicator/{code}")
    public Response getIndicators(@PathParam("code") String code) { 

        LOG.info("Buscando indicadores para o Pais => " + code);
        
        return apiService.getIndicatorByCountry(code, "json", "date", "500");
    }
}