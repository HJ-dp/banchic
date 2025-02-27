package com.ssafy.banchic.domain.entity.perfume.season;

import com.ssafy.banchic.domain.entity.BaseEntity;
import com.ssafy.banchic.domain.entity.Perfume;
import com.ssafy.banchic.domain.entity.perfume.Season;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Summer extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "summer_id")
    private int id;

    @OneToOne
    @JoinColumn(name = "perfume_id")
    private Perfume perfume;

    public Summer(Perfume perfume) {
        this.perfume = perfume;
    }
    @Builder
    public static Summer from(Perfume perfume) {
        return Summer.builder()
                .perfume(perfume)
                .build();
    }
}
