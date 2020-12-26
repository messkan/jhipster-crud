package com.mycompany.myapp.service.impl;

import com.mycompany.myapp.service.StoreService;
import com.mycompany.myapp.domain.Store;
import com.mycompany.myapp.repository.StoreRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing {@link Store}.
 */
@Service
@Transactional
public class StoreServiceImpl implements StoreService {

    private final Logger log = LoggerFactory.getLogger(StoreServiceImpl.class);

    private final StoreRepository storeRepository;

    public StoreServiceImpl(StoreRepository storeRepository) {
        this.storeRepository = storeRepository;
    }

    @Override
    public Store save(Store store) {
        log.debug("Request to save Store : {}", store);
        return storeRepository.save(store);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Store> findAll() {
        log.debug("Request to get all Stores");
        return storeRepository.findAll();
    }


    @Override
    @Transactional(readOnly = true)
    public Optional<Store> findOne(Long id) {
        log.debug("Request to get Store : {}", id);
        return storeRepository.findById(id);
    }

    @Override
    public void delete(Long id) {
        log.debug("Request to delete Store : {}", id);
        storeRepository.deleteById(id);
    }
}
